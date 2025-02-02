import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await axios.get('https://animeflv.cz/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const animes = [];

    $('li').each((_, element) => {
      const episode = $(element).find('span.Capi').text().trim();
      const name = $(element).find('strong.Title').text().trim();
      const image = $(element).find('span.Image img').attr('src') || '';

      if (episode && name && image) {
        animes.push({
          episode,
          name,
          image,
        });
      }
    });

    return NextResponse.json(animes);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching animes' }, { status: 500 });
  }
}
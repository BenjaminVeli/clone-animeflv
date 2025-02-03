import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Anime, LatestAnime, Ongoing } from '@/types'; // Asegúrate de importar tus interfaces

export async function GET() {
  try {
    const response = await axios.get('https://animeflv.cz/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const animes: Anime[] = []; // Array para episodios recientes
    const ongoings: Ongoing[] = []; // Array para animes en emisión
    const latestanimes: LatestAnime[] = []; // Array para los últimos animes


    // Scraping de episodios recientes
    $('li').each((_, element) => {
      const episode = $(element).find('span.Capi').text().trim();
      const name = $(element).find('strong.Title').text().trim();
      const image = $(element).find('span.Image img').attr('src') || '';
      const alt = $(element).find('span.Image img').attr('alt') || '';

      if (episode && name && image && alt) {
        animes.push({
          episode,
          name,
          image,
          alt,
        });
      }
    });


    // Scraping de animes en emisión
    $('ul.ListSdbr li').each((_, liElement) => {
      const nameOngoing = $(liElement).find('a').text().trim();
      if (nameOngoing) {
        ongoings.push({
          nameOngoing,
        });
      }
    });

    
    // Scraping de últimos animes
    $('ul.ListAnimes.AX.Rows.A06.C04.D03 li article.Anime.alt.B').each((_, latestElement) => {
      const imgLatest = $(latestElement).find('div.Image.fa-play-circle-o figure img').attr('src') || '';
      const nameLatest = $(latestElement).find('h3.Title').text().trim();
      const informationLatest = $(latestElement).find('div.Description p').text().trim();

      if (imgLatest && nameLatest && informationLatest) {
        latestanimes.push({
          imgLatest,
          nameLatest,
          informationLatest,
        });
      }
    });

    // Retornar ambos arrays como respuesta
    return NextResponse.json({ animes, ongoings, latestanimes });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching animes' }, { status: 500 });
  }
}
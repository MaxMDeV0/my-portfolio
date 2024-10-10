import { NextResponse } from "next/server"
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio'; 

export async function GET(){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://fr.linkedin.com/in/maxence-merter', {
      waitUntil: 'networkidle2', 
    });
    const content = await page.content(); 
    await browser.close();

    const $ = cheerio.load(content);
    const section = $('[data-section="experience"]');  
    const sectionContent = section.html()

    const $$ = cheerio.load(sectionContent);
    const lists = $$('li');  
    const listArray = lists.map((i, el) => {
        return $$(el).html();
    }).get();
    
    let response = [];

    const parseElement = (element) => {
        return element.text().trim().replace(/\n/g, '');
    }

    listArray.forEach((e)=>{
        const $ = cheerio.load(e);
        const title = $('[class="experience-item__title"]');
        const organization = $('[class="experience-item__subtitle"]');
        const desc = $('[class="show-more-less-text__text--less"]');
        response.push({title: parseElement(title), organization: parseElement(organization), desc: parseElement(desc)})
    })


    return NextResponse.json({
        html:response
    });
}
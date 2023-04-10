import axios from 'axios';
import { NotionConfig } from '../enums/notion';
import { NotionTable } from '../enums/notion';
import * as dotenv from 'dotenv';
dotenv.config();

class Notion {
  private token: string;
  constructor() {
    this.token = `${env.NOTION_TOKEN}` as string;
  }

  public async createTable() {
    const table = await axios.post(
      NotionConfig.API_URL + '/databases',
      NotionTable,
      {
        headers: {
          'Notion-Version': NotionConfig.NOTION_VERSION,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    return table;
  }

  public async addField() {}
}

export const notion = new Notion();

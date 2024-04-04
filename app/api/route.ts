import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
// import * as data from './data'
import data from './data.json'


const auth = {
  email: 'utc-thaydung-webdata@utc-thaydung-webdata.iam.gserviceaccount.com',
  key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDeGv4VteGScWxS\nLtaMyyqXLiNltzydSbiuS5op7Y6PN0DKreudsP4HRbK39ak8cIOUJqGGZ6X5WfyM\nh8r9C72x5eeNUiC1FYbIFUupNDjOXaXIafwn2tAWTK4PEMcD+NuKzSV25bLbHu8O\n3SRdH2iL0AsYMW/pDsR5TQ7+XoYo4aY+JcZ/kTeLKJP37Eg7r5Lv1YbcVws/7QgB\nXNNCIrsdimuLqtNP825UVjLgfaMMwfPQn8unQee6WeP+CGUew2YTqDdcFLasj4KH\nq/X4qcZIGvchRReQJ7p91l8g5dtIBKoB+ECdIT2rim0EewZgVLxfZLbHq/Wgsqai\n3WhesyvJAgMBAAECggEAD4Tk0JkJFi2xMyvdJ3DRvMcHR6XuSRI74ofbUYctESI7\n932AC2Bw24q58mMqrFOzSfCKFEVdQkdQn3QkkZpWqp3FGGmO6gBDTus4Am5o8rh1\n60NGkHVYWVqJxfk24rbqhjAP6Fcj8G4gp5H5pr0ZVb2XbN0Vc/wpa81f2RO7PZNn\nXvoXNnNIc0+XlVaFoAjQTxRvl2A6+s5JMiBISppyw8sMMSVoLdr1Z25MMnWK2cgg\nZZZnX78wwG+WqtAeJR3JcJMrh7mhbq7DbK9GwlUTyXbYPknOvvZOzJxQNLkyjMCO\ng/1j3uqB+SWG8Ut9wyY9VTMjTb2wEdUj244ZaBHOdQKBgQD/S/7BUAvPe5uUAd3F\nvsCFqRniHRQr38rG+nVeRD7+WtWNIcAI/jA1YtCCNXohO2xwZKD4O3YYqu++v6Sx\nUCdIUWCPgTCstAuV7CLMHMBADXoRlWgG+40/QFktxnx9cVMT7K8o9QcQyYOtqFB0\nKBhanhkdP3i4L475N1k3oP8QPQKBgQDet5hCBXB50bCzYEh05m3A/J46cQh16PHh\n928Ov8Q29DhmCnR27GLmEkjtzI6Q2hIDSoUVEoNmF71E/Sk+JK2qxXlrLT4tCIHL\nPE4zmCMnsUOfZJZ/Yb3P9C2b9fFha1n0h+wzfm6uUiDn32fMFjfMd0P/HfRUixTL\n1cPW8v8WfQKBgF0W/+DLaFMStmsktxI4+QiD3a1Gfyl0ZANkJlHmPrYOtxnMObLN\nxRRiYLdp+ouNmH/vIYcCX5ClG+CJDuuc14YWLkiFihMfX64eOZ4FydBRWbZ5rUIG\njb2HoD0ByDkRjoKQZlpf5mCnqj0zR4rjZ+X7ChtRHprCtLaJCR4wtXDdAoGBANfl\njbliYHgWp34bNeHshjRwLkpkzFjQqbntDEF18BV9hTaVp/Soje6NhxjOFN2iJ5f9\nIykcOzg6hwVbjCFrmNZUe7FDuGQbPQbwvLYTIvEVS4I2FhYBf+kYwSXQsl9Hm3oK\nURRR2aUuhCuCS7JxT0Hr04R5WyKheFVoMWIrSNBZAoGBAL9ne8WvrVOwTB19Wur6\npyLAMXWYpy/cdmYx9tFQZyiK40uf4wxikGi3jHyO2Mf4OvF0kG8QdQq7XkwoA/qT\nD0aTq9h0fsZ3ojd2zngz/WbJSEVWdUaQZkt1c6WTK31nDjsqGRpHgA8h3YjGGjfg\nhKIrHM/cWwNHfOjGof/NjBTt\n-----END PRIVATE KEY-----\n'.replace(
    /\\n/gm,
    '\n'
  ),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
};

const spreadsheetID = '1VkQpa9D_95a1kbElwE5vfbJCq9u7MQdAfXVGR-uI4sg';

// var data: any = null
async function loadMap() {
  var cols: any;
  var rows: any;
  var mapData: number[][] = [];
  // if (data == null) {

  //   var lines = fs.readFileSync(path.join(__dirname, '../../../../data.csv'), 'utf8').trim().split('\n')
  //   cols = lines[0].split("\t").slice(1).map(e => e.trim())
  //   rows = lines.map(e => e.split("\t")[0]).slice(1).map(e => e.trim())
  //   for (var i = 1; i < lines.length; i++) {
  //     mapData[i] = lines[i].split("\t").splice(1).map(e => parseFloat(e) || 0).map(e => parseFloat(e.toFixed(1)))
  //   }

  //   mapData = mapData.slice(1)

  //   data = {
  //     rows,
  //     cols,
  //     mapData
  //   }
  // }

  // fs.writeFileSync(path.join(__dirname, '../../../../output_abs.json'), JSON.stringify(data), 'utf-8')

  return data
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const index = Number(searchParams.get('index'));

    if (index == 2) {
      const data = await loadMap();
      return NextResponse.json({
        message: 'success',
        data,
      });
    }

    const serviceAccountAuth = new JWT(auth);
    const doc = new GoogleSpreadsheet(spreadsheetID, serviceAccountAuth);
    await doc.loadInfo();
    const data = (await doc.sheetsByIndex[index].getRows()).map((row) => row.toObject());
    return NextResponse.json({
      message: 'success',
      data,
    });
  } catch (error) {
    return NextResponse.json({
      message: (error as any).toString(),
    });
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const index = Number(searchParams.get('index'));

    const data = await request.json();

    const serviceAccountAuth = new JWT(auth);
    const doc = new GoogleSpreadsheet(spreadsheetID, serviceAccountAuth);
    await doc.loadInfo();
    await doc.sheetsByIndex[index].addRow(Object.keys(data).map((key) => data[key]));
    return NextResponse.json({
      message: 'success',
    });
  } catch (error) {
    return NextResponse.json({
      message: 'fail',
    });
  }
}

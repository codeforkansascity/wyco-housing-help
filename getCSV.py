import requests
import tabula
from lxml import html
from os import path

def getLandBankInventoryURL(baseURL='https://www.wycokck.org'):
    '''
    Assumptions
     1. the WEBPAGE that has the Land Bank Inventory link to the PDF does not change
     2. the LINK to the PDF can change
    '''
    landbankURL = '/LandBank/Properties.aspx'
    response = requests.get(baseURL + landbankURL)
    page = html.fromstring(response.content)
    return baseURL + page.xpath('//a[@title="Land Bank Inventory"]/@href')[0]

def getPDFData(url):
    '''
    INPUT - url from getLandBandInventoryURL
    OUTPUT - pandas dataframe
    '''
    return tabula.read_pdf(url, pages='all', multiple_tables=False)[0]

csvfile = 'Land Bank Inventory.csv'
if not path.exists(csvfile):
    url = getLandBankInventoryURL()
    print("Processing: {}".format(url))
    print("Please Wait...")
    table = getPDFData(url)
    table.to_csv(csvfile, index=False)

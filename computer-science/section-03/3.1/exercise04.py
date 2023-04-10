import requests
from parsel import Selector

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = Selector(response.text)

title = selector.css(".product_main h1::text").get()
price = selector.css(".price_color::text").re_first(r"£([0-9]+\.[0-9]+)")
description = selector.css("#product_description + p::text").get()
cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

suffix_description = "...more"
if description.endswith(suffix_description):
    description = description.removesuffix(suffix_description)

print(title, price, description, cover, sep=", ")

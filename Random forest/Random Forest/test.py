import jmespath
import json

f = open('rss/dataForm.json', encoding="utf8")
data = json.load(f)

search_string1 = "[? Sexe == 'Homme'] | length(@)"
search_string = "[? Sexe == 'Femme'] | length(@)"

print(jmespath.search(search_string1, data))
print(jmespath.search(search_string, data))
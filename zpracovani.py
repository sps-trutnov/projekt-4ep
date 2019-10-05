import sys

knihy = open("Knihy.csv","r",encoding="utf-8")

next(knihy)

autori = list()

for kniha in knihy:
    #print(kniha)
    kniha = kniha.split(";")
    #print(kniha[1])
    autori.append(kniha[1])

knihy.close() 

autori = list(dict.fromkeys(autori)) #odstraneni duplikatu
#print(autori)

sql_autori = ""
for autor in autori:
    if len(autor.split(" ")) == 2:
        #print(autor)
        sql_autori += "('" + autor.split(" ")[0] + "','" + autor.split(" ")[1] + "')\n"
    elif len(autor.split(" ")) == 3:
        sql_autori += "('" + autor.split(" ")[0] + " " + autor.split(" ")[1] + "','" + autor.split(" ")[2] + "'),\n"
    else:
        sql_autori += "('','" + autor + "'),\n"


print(sql_autori)
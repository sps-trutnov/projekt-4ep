import sys

knihy_csv = open("Knihy.csv","r",encoding="utf-8")

next(knihy_csv)

autori = list()
knihy = {}

for kniha in knihy_csv:
    #print(kniha)
    kniha = kniha.rstrip().split(";")
    #print(kniha[1])
    autori.append(kniha[1])

    knihy[len(knihy)] = list(kniha)

knihy_csv.close() 


autori = list(dict.fromkeys(autori)) #odstraneni duplikatu
#print(autori)



#nahrazeni autora jeho id
for kniha in knihy:
    knihy[kniha][1] = autori.index(knihy[kniha][1])
    #print(knihy[kniha])



sql_autori = "" 
for autor in autori:
    if len(autor.split(" ")) == 2:
        #print(autor)
        sql_autori += "('" + str(autori.index(autor)+1) + "','" + autor.split(" ")[0] + "','" + autor.split(" ")[1] + "'),\n"
    elif len(autor.split(" ")) == 3:
        sql_autori += "('" + str(autori.index(autor)+1) + "','"  + autor.split(" ")[0] + " " + autor.split(" ")[1] + "','" + autor.split(" ")[2] + "'),\n"
    else:
        sql_autori += "('" + str(autori.index(autor)+1) + "','"  + "','" + autor + "'),\n"




sql_knihy = "" 
for kniha in knihy:
    sql_knihy += "('" + knihy[kniha][0] + "','" + knihy[kniha][2] + "','"  + str(knihy[kniha][1]) + "','" + "','" + "','"  + knihy[kniha][3] + "','"  + knihy[kniha][4] + "','"  + knihy[kniha][6] +"','" + "','"  + knihy[kniha][5] + "'),\n"


print(sql_autori)
#print(sql_knihy)
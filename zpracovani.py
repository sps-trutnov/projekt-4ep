import sys

knihy = open("Knihy.csv","r",encoding="utf-8")

next(knihy)

autori = list()

for kniha in knihy:
    #print(kniha)
    kniha = kniha.split(";")
    print(kniha[1])
    autori.append(kniha[1])

print(autori)
knihy.close()

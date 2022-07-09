class Classy(object):
    def __init__(self):
        self.items = []
        
    def addItem(self, val):
        self.items.append(val)
    
    def getClassiness(self):
        total = 0
        for x in self.items:
            if(x == "tophat"):
                total += 2
                print(x, total)
            elif(x == "bowtie"):
                total += 4
                print(x, total)
            elif(x == "monocle"):
                total += 5
                print(x, total)
            else:
                total += 0
                print(x, total)
        return total


me = Classy()
# Should be 0
print(me.getClassiness())

me.addItem("tophat")
print(me.getClassiness())

me.addItem("bowtie")
me.addItem("jacket")
me.addItem("monocle")
# Should be 11
print(me.getClassiness())

me.addItem("bowtie")
# Should be 15
print(me.getClassiness())
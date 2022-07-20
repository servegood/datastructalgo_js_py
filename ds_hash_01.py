#hash / dictionary / objects

user = {
  "age": 54,
  "name": 'Santa',
  "magic": True,
}

print(user["age"]) # O(1) - instant retrieval
user["spell"] = 'abra kadabra' # O(1) - instant add
print(user)
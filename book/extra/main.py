import json
import sys


if __name__ != "__main__":
    sys.exit(0)

if len(sys.argv) > 1:
    if sys.argv[1] == "supports":
        sys.exit(0)

context, book = json.load(sys.stdin)
with open("./book.json", "w") as f:
    f.write(json.dumps(book))
print(json.dumps(book))

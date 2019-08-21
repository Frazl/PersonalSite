import os 
import json

def make(output_file, src, isBlog=False):
    output = []
    files = os.listdir(src)
    #Get all md files
    md_files = []
    for f in files:
        if f[-3:] == ".md":
            md_files.append(f)
    # Parse each of the files
    for f in md_files:
        with open(src+'/'+f) as md:
            s = md.read()
        parsed = md_parser(s, isBlog)
        output.append(parsed)
    #Make the JSON and write to a file
    with open(output_file+".json", "w") as f:
        d = {output_file : output}
        f.write(json.dumps(d))
    

def md_parser(md, isBlog):
    d = {}
    md = md.split("===")
    if len(md) % 2 != 0:
        print("Failed to parse", md)
        print("Not even")
        exit(1)
    else:
        i = 0 
        while i < len(md) - 2:
            d[md[i].strip()] = md[i+1].strip()
            i += 2
        if isBlog:
            d['paragraphs'] = [s for s in md[i+1].split("\n")[1:]]
        else:
            d[md[i].strip()] = md[i+1].strip()
    return d


if __name__ == '__main__':
    make("projects", "./content/projects")
    make("blogs", "./content/blogs", True)
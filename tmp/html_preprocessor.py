
lines = []
lineIndex = 0
htmlFile = 'index.html'
info = '<!-- Generated from ' + htmlFile + '.template. Do not edit. -->'

def output():
	with open(htmlFile+'.template') as fin:
		with open(htmlFile, 'w') as fout:
			fout.write(info+'\n')
			for l in fin.readlines():
				replaceLine = False
				ls = l.strip()
				for key in func_map:
					# replace the template line
					if ls.startswith('<!--') and (key + ' content') in ls:
						fout.write('\n'.join(resultSet[key])+'\n')
						replaceLine = True
						break
				if not replaceLine:
					fout.write(l)

def read():
	for l in open('data.txt').readlines():
		l = l.strip()
		if len(l) > 0 and not l.startswith('#'):
			lines.append(l)

def nextLine():
	global lineIndex
	if lineIndex < len(lines):
		lineIndex += 1
		return lines[lineIndex-1]
	else:
		return None

def process():
	func = None
	while True:
		line = nextLine()
		controlLine = False
		if line == None:
			break
		for key in func_map:
			if '[' + key + ']' == line:
				func = func_map[key]()
				controlLine = True
		if not controlLine:
			func(line)

def mode1():
	def doit(line):
		date = line
		title = nextLine()
		noteLink = nextLine()
		resultSet['events'].append('<div><div class="col-md-9"><a class="titleLink" href="events/%s.jpg" target="_blank">%s</a></div><div class="col-md-2"><a class="noteLink" href="%s" target="_blank">(Notes for %s)</a></div></div>'\
			% (date.replace('.', '_'), title, noteLink, date))
	return doit

def mode2():
	def doit(line):
		title = line
		link = nextLine()
		resultSet['westwood cafe'].append('<div class="col-md-12 marginbot-20"><a class="storyLink" href="' + link +'">' + title + '</a></div>')
	return doit

def mode3():
	def doit(line):
		title = line
		link = nextLine()
		resultSet['story'].append('<div class="col-md-12 marginbot-20"><a class="storyLink" href="' + link +'">' + title + '</a></div>')
	return doit

### To add a new mode, just create one mode function similar and add entry to func_map, other codes do not need to be changed

func_map = {
	'events': mode1,
	'westwood cafe': mode2,
	'story': mode3
}

resultSet = {key: [] for key in func_map}

def main():
	read()
	process()
	output()

### TODO: automatic detect photo and add them into html page
main()

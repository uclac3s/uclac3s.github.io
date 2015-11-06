
print '/* Generated from seminars_C3S weekly - info.csv, Do not Modify! */'
print
print 'var sems = {'

cnt = 0
for line in open('/home/victor/Desktop/seminars_C3S weekly - info.csv').readlines():
    elems = line.strip().split(',')
    if (cnt > 0):
        print ','
    print '    "' + elems[0] + '": "' + elems[1] + '"',
    cnt += 1
print
print'};'

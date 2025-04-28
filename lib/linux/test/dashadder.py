def dash(file):# Read all lines
        # Read all lines
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Modify lines from the 3rd line onward
    for i in range(2, len(lines)):  # index 2 is the third line (indexes start at 0)
        lines[i] = '- ' + lines[i]

    # Write the lines back
    with open(file, 'w', encoding='utf-8') as f:
        f.writelines(lines)

dash('StartsWithD.md')
dash('StartsWithE.md')
dash('StartsWithF.md')
dash('StartsWithG.md')
dash('StartsWithH.md')
dash('StartsWithI.md')
dash('StartsWithJ.md')
dash('StartsWithK.md')
dash('StartsWithL.md')
dash('StartsWithM.md')
dash('StartsWithN.md')
dash('StartsWithO.md')
dash('StartsWithP.md')
dash('StartsWithQ.md')
dash('StartsWithR.md')
dash('StartsWithS.md')
dash('StartsWithT.md')
dash('StartsWithU.md')
dash('StartsWithV.md')
dash('StartsWithW.md')
dash('StartsWithX.md')
dash('StartsWithY.md')
dash('StartsWithZ.md')
dash('StartsWithDot.md')
dash('StartsWithNumbers.md')

from wand.image import Image

with Image(filename = './test2_copy.png') as imgA:
    with Image(filename='./test2.png') as imgB:
        imgA.sequence.append(imgB)
        imgA.save(filename="imgA.png")
    with imgA.complex('conjugate') as results:
        results.save(filename="output-%02d.png")
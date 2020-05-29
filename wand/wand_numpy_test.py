# import numpy
# from wand.image import Image
# import cv2

# with Image(filename='rose:') as img:
#     matrix = numpy.array(img)

# print(matrix.shape)
# cv2.imshow("matrix", matrix)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

from io import BytesIO
import skimage.io
from wand.image import Image
import numpy
import cv2

with Image(filename='rose:') as image:
    image.format = 'bmp'
    image.alpha_channel = False
    img_buffer = numpy.asarray(bytearray(image.make_blob()), dtype='uint8')
bytesio = BytesIO(img_buffer)
img = skimage.io.imread(bytesio)

print(img.shape)
cv2.imwrite('rose.png', img)
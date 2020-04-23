import cv2
import numpy as np

img = cv2.imread("C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\wand\\test.png")
print(img)
img[np.where(img==255)] = 0
cv2.imwrite("test2_temp.png", img)
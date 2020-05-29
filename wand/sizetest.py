import cv2
import numpy as np

### path ###
image_base_path = 'C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\data\\image\\'
font_base_path = "C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\data\\font_v5_20200306\\font\\"
# result_base_path = "C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\frontend\\font-compat-test-service\\result\\"
result_base_path = "C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\frontend\\font-compat-test-service\\result"


img_path = image_base_path + 'letter_display_for_ver3.png'

img = cv2.imread(img_path, 0)
print(img.shape)
print(len(np.where(img == 255)[0]))

img2 = cv2.imread("C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\frontend\\font-compat-test-service\\result2\\HYGothic_A1_050_failed.png", 0)
print(img2.shape)
print(len(np.where(img2 == 255)[0]))

img3 = cv2.imread("C:\\Users\\remake\\gdrive\\remake\\font-compat-test-service\\frontend\\font-compat-test-service\\result2\\123RF_kkuewggo_B_TTF_failed.png", 0)
print(img3.shape)
print(len(np.where(img3 == 255)[0]))
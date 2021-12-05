import os
import shutil
import random

def get_file_list(input_dir):
    return [file for file in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, file))]

def get_loaded_file_list(loaded_file):
    lines = None
    with open(loaded_file, 'r') as file:
        lines = file.readlines()
        lines = [line.rstrip() for line in lines]
    return lines

def get_random_files(file_list, N):
    return random.sample(file_list, N)

def copy_files(random_files, input_dir, output_dir):
    for file in random_files:
        shutil.copy(os.path.join(input_dir, file), output_dir)

def main(input_dir, output_dir, loaded_file, N):
    file_list = get_file_list(input_dir)
    loaded_file_list = get_loaded_file_list(loaded_file)
    file_list_new = [file for file in file_list if file not in loaded_file_list]
    print(len(file_list), len(loaded_file_list), len(file_list_new))

    copy_files(file_list_new, input_dir, output_dir)
    # random_files = get_random_files(file_list_new, N)
    # copy_files(random_files, input_dir, output_dir)

in_dir = '/Users/genzorr/developing/hackatons/data/images'
out_dir = '/Users/genzorr/developing/hackatons/data/test-set'
loaded_file = '/Users/genzorr/developing/hackatons/loaded.txt'
main(in_dir, out_dir, loaded_file, 1000)

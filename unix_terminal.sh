# instal through Rosetta 2 
arch -x86_64

# reload bash settings
source ~/.bash_profile

# open .bash_prompt in nano text editor 
nano .bash_prompt

# cancel current comand/line
Ctrl + C

# manual for the manual command
man man

# clear line
ctrl + u

# go to begining of line, go to end of line
Ctrl+A Ctrl+E

# clear the screen 
clear
SHIFT+L

# exit terminal window
exit

_____________________________________________________

# list directory
ls

# show curent directory path 
pdw

## root directory
cd ~

## change directory to documents 
cd Documents/stuff

## one directory back - parent 
cd ..

## make new folder
mkdir New_Folder

## make new file
touch text_file.txt

## open file
open text_file.txt

## open file with specific app
open -a Atom text_file.txt

## remove all files in directory
rm *

## remove directory
rm -r Folder/

___________________________________

## puting text in a new text file
echo "From fairest creatures we desire increse," > sonet_1.txt

## use concatenate to dump contents of the text file
cat sonnet_1.txt

## append second line to text file
echo "That thereby beaut's Rose might never die," >> sonet_1.txt

## wildcard symbol
*

## show all files ending in .txt
ls *.txt

## show in long form
ls -l *.txt

## show in "reversed time of modification long format"
ls -rtl

## make hidden file
echo "hidden file" > .gitignore

## show hidden files
ls -a

## change file name
mv file1 file2

_____________________________________________________
# working with .git

#initialise
git init 

#track status
git status 

# track file to staging area
git add file_name.txt 

# add all files in directory
git add . 

# commit the file and changes
git commit -m "Message for the current commit - present tense"

# show log of commits
git log


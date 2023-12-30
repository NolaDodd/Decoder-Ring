# The Decoder Ring
I worked on this project while attending Thinkful/Chegg Skills's Software Engineering bootcamp.

##*The Caesar Shift*
The first decoder is a Caesar Shift, a type of substitution cipher originally used by Julius Caesar. 
It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".
```
Shift : 3
"thinkful" -> "wklqnixo"
```
```
Shift : -3
"crlqnv" --> "zoinks"
```

##*The Polybius Square*
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. 
Each letter is represented through a coordinate. 
```
      1      2      3      4      5 
1     A      B      C      D      E
2     F      G      H     I/J     K
3     L      M      N      O      P
4     Q      R      S      T      U
5     V      W      X      Y      Z    
```
For example, the letter "B" would be represented by the numerical pair "21".

"Buddy"  --> "2154414145"
"3251131343 2543241341" --> "hello world"
"4432423352125413" --> "th(i/j)nkful"

##*The Substitution Shift*

The Substitution Cipher requires a standard alphabet and a substitution alphabet. 
Letters from the standard alphabet will be transposed to the standard alphabet. 
This cipher requires a substitution alphabet of exactly 26 characters.
The substitution can have special characters such as "!, #, $, etc."

For Example: 
```
Real Alphabet: *A B C D E F G H I J K L M N O P Q R S T U V W X Y Z*
Substitution:  *Q W E R T Y U I O P A S D F G H J K L Z X C V B N M*
```
"Blue" --> "wsxt"
"pxdhofu" --> "jumping"


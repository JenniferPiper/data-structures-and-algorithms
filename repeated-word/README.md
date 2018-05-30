# Repeated Word

Given a string of words, return the first word that occurs more than once.

## Solution

Note: My whiteboard solution includes a misunderstanding I had about hashmaps. I calculated a unique number for each word and then attempted to find the word in the hashmap using the number as the key rather than using the word as the key. In my JS code I skipped the unnecessary step of calculating a unique number, and looked up each word using the word itself as the key.

![](../assets/repeated-word.jpg)
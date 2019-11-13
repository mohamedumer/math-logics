#include <stdio.h>
 
int main()
{
   int first, second, *p, *q, sub;
 
   printf("Enter two integers to sub\n");
   scanf("%d%d", &first, &second);
 
   p = &first;
   q = &second;
 
   sub = *p - *q;
 
   printf("Sub of the numbers = %d\n", sub);
 
   return 0;
}
## Thinking Functional ? - ~~FP best practices~~
Warning : do not write this code in you projects.

## This talk is influenced by the branch of mathematics "Lambda Calculus"
  
## In the history of programming languages
   - 
    (well known) - Turing machine. 
   Examples : C, Java, c++

   - Alonzo church  (Less known) - Lambda calculus(Function is a blackbox). 
   Examples : Haskell, Lisp
   
   ##"Anything that is "effectively computable" can be computed by Turning Machine"

   Came up with similar theories. One with state one without state.  
   
   
## Lambda calculus lays the foundations of functional programming 
    ```(\n.((\f.(\x.x x) (\x.f (x x))) (\c.\n.\m.\f.\x.(\d.(\n.n (\x.(\a.\b.b))   
        (\a.\b.a)) d ((\f.\x.x) f x)   
            (f (c d m f x))) 
                ((\m.\n.n (\n.\f.\x.n (\g.\h.h (g f)) (\u.x) (\u.u)) m) n m)))   
                ((\n.\f.\x. f (n f x)) n))  ```

## Lambda Calculus Grammar -
 - Bind argument : Variables
 - Define function
 - Call function  

# Lets build something
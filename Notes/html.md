# Day-1 07-08-24

## Moving into the File Loctions
1. moving into the folders  -> /folder_name/file_name
2. Files in the same Folder -> by using file name 
3. Moving out of the Folder -> ../ to go outside a folder
    - Moving to the Parent Folder -> ../ or "../../" for go out to folders

# block and inline element 
- block element:  A block-level element always starts on a new line. 
    - \<h1 - h6> , \<p>,\<div> \<ul>,\<li>

- > **Inline Elements -:**  An inline element does not start on a *new line. An inline element only takes up as much width as necessary.
    - \<a>, \<textarea> \<button> \<img>


> ``` The \<div> element is often used as a container for other HTML elements. ```

> ``` The \<span> element is often used to group inline elements for styling purposes.```
## list (li tags)
- it is three type 
  1. **order list (ol) ->** item define by  \<li\> tag
      - \<ol type ="a"\> :-
      - \<ol type="i"\>
      - \<ol type ="A"\>
      - \<ol start ="11"\>

  2. **unordered list (ul tag) ->** item define by  \<li\> tag
      - \<ul\> \<ul\>
      - (list-style-type:"disc";) type => disc,circle,square,none .


  3. **description list (\<dl\>) ->** description define by \<dd\>tag
      - \<dt> tag is used to define heading 
      - \<dd> tag us define to describe the description.

## anchor tag \<a>
> it is used to link to another page or to another part of the same page. 

- href=" ".
- target =_blank -> for open new tab
- target = _self - Default. Opens in the same window/tab
- target = _top 

## video tag 
  > it is used to embed video in the webpage .   
   
  - control
  - autoplay 
  - poster => link of any  image for thumbnail
  - loop muted 

## iframe tag
> it is used to embed another webpage inside the webpage. 

>eg)- \<iframe src="html-tags.html" frameborder="0" width="40%" height="40px"></iframe>
</body>


## semantic elements
> A semantic element clearly describes its meaning to both the browser and the developer.
- \<header> - Defines a header for a document or a section
- \<nav> - Defines a set of navigation links
- \<section> - Defines a section in a document
- \<article> - Defines an independent, self-contained content
- \<aside> - Defines content aside from the content (like a sidebar)
- \<footer> - Defines a footer for a document or a section
- \<details> - Defines additional details that the user can open and close on demand
- \<summary> - Defines a heading for the \<details> element

## html  form tag 
> An HTML form is used to collect user input.  
> eg-: \<form action ="" method ="">
- elements of form 
    - \<label>  
    - \<input>
    - \<textarea>
    - \<select>
    - \<button>
    - \<option> element defines an option that can be selected.
- attributes of form
    - action
    - method
      - post 
      - get
    - automatically -: is on, the browser automatically complete values based on values that the user has entered before.

- input tag



## Table tag
- \<table> \<tr> \<thead> \<td>
- attributes 
    - colspan rowspan -> combine the column and rows
    - caption - >To add a caption to a table, use the
    - \<colgroup> -:  to style specific columns of a table.by h elp of \<col> element
> **Note**:- The <colgroup> tag must be a child of a <table> element and should be placed before any other table elements, like \<thead>, \<tr>, \<td> etc., but after the \<caption> element, if present.  







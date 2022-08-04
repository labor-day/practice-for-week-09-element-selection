const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    console.log(document.getElementsByClassName("seed"));

    // 2. Get all seedless fruit elements
    // Your code here
    console.log(document.querySelectorAll(".seedless"));

    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.querySelector('.seedless'));

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log(document.querySelector("#wrapper span"));

    // 5. Get all children of element "wrapper"
    // Your code here
    console.log(document.querySelector("#wrapper").children);

    // 6. Get all odd number list items in the list
    // Your code here
    console.log(document.querySelectorAll("ol li:nth-child(odd)"));

    // 7. Get all even number list items in the list
    // Your code here
    console.log(document.querySelectorAll("ol li:nth-child(even)"));

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    console.log(document.querySelectorAll("#three p a:not([class])"));

    // 9. Get "Amazon" list element
    // Your code here
    console.log(document.querySelector(".shopping"));

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let images = document.querySelectorAll(".unicorn");
    let listElements = [];
    images.forEach(
        image => listElements.push(image.parentElement)
    );

    console.log(listElements);
}

window.onload = select;

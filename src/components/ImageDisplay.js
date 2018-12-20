import React from "react";
import treeone from "../images/treeone.png";
import treetwo from "../images/treetwo.png";
import treethree from "../images/treethree.png";
import treefour from "../images/treefour.png";
import treefive from "../images/treefive.png";
import treesix from "../images/treesix.png";
import treeseven from "../images/treeseven.png";
import treeeight from "../images/treeeight.png";
import treenine from "../images/treenine.png";

function ImageElement() {
    const imgStyle = {
        border: "1px solid #ddd",
        padding: "5px",
        width: "150px",
        height: "200px"
      };

      function handleClick(e) {
        e.preventDefault();
        //shuffleArray();
      }

    const treeImages = [treeone, treetwo, treethree, treefour, treefive, treesix, treeseven, treeeight, treenine, treeone, treetwo, treethree, treefour, treefive, treesix, treeseven];
    const imgs = treeImages.map((image) =>
    <img src={image} style={imgStyle} onClick={handleClick}/>
    );

return <ul>{imgs}</ul>;
}

export default ImageElement;

//Above code will render images, but does not shuffle their order

// Shuffle Attempt:

//Component ImageElement
/* function ImageElement() {
    //Inline styling of images
    const imgStyle = {
        border: "1px solid #ddd",
        padding: "5px",
        width: "150px",
        height: "200px"
    };

    function shuffleArray(arr) {
        let i,
            j,
            temp;
        for (i = arr.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * (i +1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        return () => {
            const imgs = arr.map((image) =>
            <img src={image} style={imgStyle} onClick={handleClick}/>);
        }
    }

    function handleClick(e) {
        e.preventDefault();
        shuffleArray(treeImages);
      }

    //array of images
    const treeImages = [treeone, treetwo, treethree, treefour, treefive, treesix, treeseven, treeeight, treenine, treeone, treetwo, treethree, treefour, treefive, treesix, treeseven];
    
    return <ul>{imgs}</ul>;

    //const imgs = shuffleArray(treeImages)
    //return <ul>{imgs}</ul>; //displays broken image because it is pulling in all image sources, strung together

}

export default ImageElement;  */


 




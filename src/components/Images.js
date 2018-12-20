import React from "react";
import { link } from "react-router";
//import { treeone, treetwo, treethree, treefour, treefive, treesix, treeseven, treeeight, treenine } from "./images";
import treeone from "../images/treeone.png";
import treetwo from "../images/treetwo.png";
import treethree from "../images/treethree.png";
import treefour from "../images/treefour.png";
import treefive from "../images/treefive.png";
import treesix from "../images/treesix.png";
import treeseven from "../images/treeseven.png";
import treeeight from "../images/treeeight.png";
import treenine from "../images/treenine.png";

const images = [treeone, treetwo, treethree, treefour, treefive, treesix, treeseven, treeeight, treenine];

function ImageDisplay () {
    /*     for (var i = 0; i < images.length; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            images.push(<image key={i} />);
        } */
        //return <tbody>{rows}</tbody>;
        return (
           <ul>
                <li>
                <img src={treeone} alt="tree one" />;
                </li>
    
                <li>
                <img src={treetwo} alt="tree two" />;
                </li>
            </ul> 
            //<tbody>{images}</tbody>
          
        
        );
    
    }
    
    export default ImageDisplay;

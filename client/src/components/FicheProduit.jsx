import React, { useState } from 'react';
import { ImgVilla } from './ImgVilla';
import { NomVilla } from './NomVilla';
import { LocalisationVilla } from './LocalisationVilla';
import { DescriptionVilla } from './DescriptionVilla';
import { StarRating } from './StarRating';
import { ButtonVilla } from './ButtonVilla';
import '/src/index.css'

export const FicheProduit = () => {

    return(
<>
<div id='ficheproduit'>
    <div id="ficheleft">
        <ImgVilla/>
        <StarRating/>
    </div>
    <div>
        <NomVilla/>
        <LocalisationVilla/>
        <DescriptionVilla/>
      
    </div>
    <div id='buttonDiv'>
    <ButtonVilla/>
    </div>
</div>
</>
    )
}
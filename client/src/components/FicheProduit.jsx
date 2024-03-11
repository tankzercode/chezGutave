import React, { useState } from 'react';
import { ImgVilla } from './ImgVilla';
import { NomVilla } from './NomVilla';
import { LocalisationVilla } from './LocalisationVilla';
import { DescriptionVilla } from './DescriptionVilla';
import { StarRating } from './StarRating';
import { ButtonVilla } from './ButtonVilla';
export const FicheProduit = () => {

    return(
<>
<span>
    <div>
        <ImgVilla/>
        <StarRating/>
    </div>
    <div>
        <NomVilla/>
        <LocalisationVilla/>
        <DescriptionVilla/>
        <ButtonVilla/>
    </div>
</span>
</>
    )
}
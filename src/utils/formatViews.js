const formatViews = (views) => {
    if(views>=10000000){
        return (views/10000000).toFixed(1).replace(/\.0$/, '')+"Cr"; // 1crore
    }
    else if(views>=100000){
        return(views/100000).toFixed(1).replace(/\.0$/, '')+"L"; //10lakhs
    }
    else if(views>=1000){
        return(views/1000).toFixed(1).replace(/\.$0/, '')+"K"
    }
    else if(!views){
        return 0;
    }
    return views;
}

export default formatViews;
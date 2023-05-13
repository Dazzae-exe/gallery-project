const ImageBox = ({ imgUrl, downloadLink }) => {
    return ( 
        <div className="col-span-4 relative w-full h-fit z-10 flex flex-col items-start justify-start overflow-hidden gap-y-2">
            <img src={imgUrl} alt="" className="w-full h-72 object-cover object-center bg-no-repeat rounded-2xl z-0" />
            <div className="w-full h-fit flex items-center justify-between">
                <a className="relative z-10" href={downloadLink} target="_blank" rel="noreferrer">Download link</a>
            </div>
        </div>
     );
}
 
export default ImageBox;
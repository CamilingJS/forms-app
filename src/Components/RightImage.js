
export default function RightImage({stage}){

    const IMG_URLS = [
        "https://res.cloudinary.com/dxctpvd8v/image/upload/v1662922291/SkillsSidePhotoV2_fgmqqv.png",
        "https://assets.codepen.io/6060109/form-stage-2.png",
        "https://res.cloudinary.com/dxctpvd8v/image/upload/v1662921285/ServicesTeamPhoto-p-800_yfypui.png",
        "https://assets.codepen.io/6060109/form-stage-4.png"
    ]


    return(
        <div className="RightImage">
            <img src={IMG_URLS[stage]}  ></img>
            
        </div>
    )
}
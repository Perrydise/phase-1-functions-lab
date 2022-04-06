// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return Math.abs(block - 42)
}

function distanceFromHqInFeet(block){
   let distanceInBlocks = distanceFromHqInBlocks(block)
    return Math.abs(distanceInBlocks * 264)
}

function distanceTravelledInFeet(startBlock,endBlock){
    let startAndEnd = startBlock - endBlock
    return Math.abs(startAndEnd * 264)
}

function calculatesFarePrice(startBlock, endBlock){
    let feetDifference = distanceTravelledInFeet(startBlock, endBlock)
        if (feetDifference <= 400){
            return 0
        }
        else if (feetDifference >400 && feetDifference <=2000){
            return (feetDifference -400)* .02
        }
        else if (feetDifference >2000 && feetDifference <=2500){
            return 25
        }
        else if (feetDifference >2500){
            return 'cannot travel that far'
        }
}

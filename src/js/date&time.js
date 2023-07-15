const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec'];

function getTime() {
    const now = new Date();
    let hour_ = now.getHours();
    let min_ = now.getMinutes();
    if(min_ < 10)
        min_ = '0' + min_;
    return hour_ + ":" + min_;
}



function getDate() {
    const now = new Date();    
    let day_ = now.getDate();
    let month_ = months[now.getMonth()];
    let year_ = now.getFullYear();
    // console.log(months);
    // console.log(months[month_] + " "  + month_);
    return day_ + " " + month_;
}


export { getDate, getTime};
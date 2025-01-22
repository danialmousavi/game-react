//api key: c91d0b808e254bd0b57e44f9deb4e72f
const API_KEY='c91d0b808e254bd0b57e44f9deb4e72f'
const base_url='https://api.rawg.io/api/';

// getting the current date

const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
    if(month<10){
        return `0${month}`
    }else{
        return month
    }
}
const getCurrentDay=()=>{
    const day=new Date().getDate();
    if(day<10){
        return `0${day}`
    }else{
        return day
    }
}
const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();
// full years 
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`;
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`;


const popular_games=`games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games=`games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games=`games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

//full address
export const popularGamesURL=()=>`${base_url}${popular_games}`;
export const upcomingGamesURL=()=>`${base_url}${upcoming_games}`;
export const newGamesURL=()=>`${base_url}${new_games}`;

export const gameDetailUrl=(game_id)=>`${base_url}games/${game_id}?key=${API_KEY}`

import React from 'react';
// import Progress from "./components/Progress/progress";
import AutoComplete from "./components/AutoComplete/autoComplete";
// interface LakerPlayerProps {
//     value: string;
//     number: number;
// }
// interface GithubUserProps {
//     login: string;
//     url: string;
//     avatar_url: string;
// }

function App() {

    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando','bradley', 'pope', 'caruso', 'cook', 'cousins',
        'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

    // const lakersWithNumber = [
    //   {value: 'bradley', number: 11},
    //   {value: 'pope', number: 1},
    //   {value: 'caruso', number: 4},
    //   {value: 'cook', number: 2},
    //   {value: 'cousins', number: 15},
    //   {value: 'james', number: 23},
    //   {value: 'AD', number: 3},
    //   {value: 'green', number: 14},
    //   {value: 'howard', number: 39},
    //   {value: 'kuzma', number: 0},
    // ]

    const handleFetch = (query: string) => {
      return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
    }

    // const handleFetch = (query: string) => {
    //   return lakersWithNumber.filter(player => player.value.includes(query))
    // }

    const select = (obj:any)=>{
        console.log(obj);
    }

  return (
    <div className="App">
        {/*<Progress percent={40}  styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={20} strokeHeight={20} styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={100} strokeHeight={30} textPosition={'out'} styles={{width:'50%'}}/>*/}
        {/*<hr/>*/}
        {/*<Progress percent={5} strokeHeight={30} textPosition={'out'} theme='danger' styles={{width:'50%'}} />*/}
        {/*<hr/>*/}
        <AutoComplete
            style={{width:'50%'}}
            fetchSuggestions={handleFetch}
            onSelect={select}
            //renderOption={renderOption}
        />
    </div>
  );
}

export default App;

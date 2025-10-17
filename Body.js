const Body =()=>{
    return(
        <div className="fooditems-grid">

           {console.log(restob)}
           {restob.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => {
          return <RCard key={res.info.id} restob={res} />;
        }
      )}
    </div> 
    )
};

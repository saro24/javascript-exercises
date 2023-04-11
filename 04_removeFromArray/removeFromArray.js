const removeFromArray = function(x, ...y) {
    
      
        const nu = [];
       
        x.forEach((i) => {
          if (!y.includes(i)) {
            nu.push(i);
          }
        });
    
        return nu;
      };


module.exports = removeFromArray;

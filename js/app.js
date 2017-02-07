var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}


$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  console.log(serverRes.results)
  var congressContainerEl = document.querySelector('.congressman-container')
  var congressObjectList = serverRes.results

  var bigCongressStr = ''
  forEach(congressObjectList, function(articleObj){
    var fullName = articleObj.first_name + " " + articleObj.last_name
    var title = articleObj.title
    var party = articleObj.party
    var state = articleObj.state_name

    var congressDiv = '<div class="congressman">'
    congressDiv += '<h2>' + fullName + '</h2>'
    congressDiv += '<h3>' + title + ' -- ' + party + '-' + state + '</h3>'
    congressDiv += '<li>' + articleObj.oc_email + '</li>'
    congressDiv += '<li>' + articleObj.website + '</li>'
    congressDiv += '<li>' + articleObj.facebook_id + '</li>'
    congressDiv += '<li>' + articleObj.twitter_id + '</li>'
    congressDiv += '<p>Term End' +  articleObj.term_end + '</p>'
    congressDiv += '</div>'

    bigCongressStr += congressDiv
   })
   congressContainerEl.innerHTML = bigCongressStr
})

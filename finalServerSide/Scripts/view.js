function getSeriesSuccessCB(seriesNames) {
    for (const s of seriesNames) {
        str += "<option value=" + s + ">" + s + "</option>";
    }
    str += "</select>";
    $("#phView").html(str);


    //alert(idtvHadar)
}
function getSeriesErrorCB(err) {
    alert("Error -cant get the Series names")
}

function showEpisodes(series) {
    var selectedText = series.options[series.selectedIndex].innerHTML;
    episodesList = "<tr>";
    console.log(selectedText);
    let api = "../api/Episodes?SeriesName=" + selectedText;
    ajaxCall("GET", api, "", getEpisodesSuccessCB, Error);
}
function getEpisodesSuccessCB(episodes) {
    console.log(episodes);
     i = 0;
    while (i < episodes.length) {
        ep = episodes[i];
        episodesList += "<td class='card2' style='width:800px height: 700px'><a class='deleteEpisodeBtn' onclick=deleteEpisode(ep) tabindex='0' role='button'>X</a> <center><b><p id='episodeTitle'>" + episodes[i].SeriesName + " season " + episodes[i].SeasonNum + "</p></b></center><img class= 'imgCard' src='" + episodes[i].ImageURL + "'>";
        episodesList += "<div id='episodeBlock'><br><b>" + episodes[i].EpisodeName + "</b></br > " + episodes[i].AirDate + "</br></br><div id='episodeOverView'>" + episodes[i].Overview + "</div></div></td>";

        if ((i + 1) % 4 == 0)
            episodesList += "</tr>";
        i++;
        if ((i + 1) % 4 == 1)
            episodesList += "<tr>";
    }
    episodesList += "</tr>";
    $("#episodesView").html(episodesList);
}
function Error(err) {
    console.log(err);
}

function exitFunc() {
    localStorage.clear();
    document.location = 'insert_signup.html';
}

function deleteEpisode(episode) {
    let api = "../api/Totals?episodeId=" + episode.EpisodeId + "&seriesId=" + episode.SeriesId + "&userId=" + user.Id;
    ajaxCall("DELETE", api, "", deleteEpisodesSuccess, Error);
}

function deleteEpisodesSuccess()
{
    alert('deleted');
}
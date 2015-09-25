//$(document).ready(function(){
// javascript placed here to mimic html insertion
// var photo_lst = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

// ===== Change it to insert new members =====
var mems = {
    "fengzhiping": [
        "Zhiping Feng",
        "Fifth Year PhD Candidate, Molecular, Cellular & Integrative Physiology, UCLA",
        "B.S. Nankai University",
        "Research Interest: Biophysics, Optogenetics, Systems Biology"
    ],
    "gaoshi": [
        "Shi Gao",
        "Fifth Year PhD Candidate, Computer Science, UCLA",
        "B.S.  Zhejiang University",
        "Research Interests: Semantic Web, Temporal Database, Database Provenance and Data Mining"
    ],
    "jiaqi": [
        "Jiaqi Gu",
        "Second Year PhD Candidate, Computer Science，UCLA.",
        "B.S. Fudan University",
        "Research Interest: Big Data Systems"
    ],
    "jiangshanxi": [
        "Shanxi Jiang",
        "Second Year PhD, Molecular, Cellular & Integrative Physiology,UCLA",
        "B.S.  Fudan University",
        "Research Interests: Systems Biology, Cardiology, Chromatin Structure, Epigenetics"
    ],
    "lirui2": [
        "Rui Li",
        "Fifth year Ph.D. Molecular and Medical Pharmacology, UCLA",
        "Bachelor of Medicine, Zhejiang University",
        "Research Interests: Inflammation and Carcinogenesis "
    ]
};

// ===== Don't change anything below =====
for (var i=0; i<=maxIndex; i++) {
    var fname = 'gallery/' + i +'.jpg';
    $('<div class="item"><a href="' + fname + '" title="" data-lightbox-gallery="gallery1" data-lightbox-hidpi=""><img src="' +
    fname + '" class="img-responsive " alt="img"></a></div>').insertBefore(".photo-anchor");
}
$(".photo-anchor").remove();
//});

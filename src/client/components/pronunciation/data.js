const practiceText = [
    {
        "text": "involved",
        "supportText": "[ɪnˈvɑlvd]"
    },
    {
        "text": "turn",
        "supportText": "[ˈtɝn]"
    },
    {
        "text": "burn",
        "supportText": "[ˈbɝn]"
    },
    {
        "text": "scorn",
        "supportText": "[skɔːrn]"
    },
    {
        "text": "born",
        "supportText": "[bɔːrn]"
    },
    {
        "text": "torn",
        "supportText": "[tɔːrn]"
    },
    {
        "text": "learn",
        "supportText": "[lɜːrn]"
    },
    {
        "text": "related",
        "supportText": "[rɪˈleɪtɪd]"
    },
    {
        "text": "butter",
        "supportText": "[ˈbʌtər]"
    },
    {
        "text": "better",
        "supportText": "[ˈbetər]"
    },
    {
        "text": "little",
        "supportText": "[ˈlɪtɫ̩]"
    },
    {
        "text": "shuttle",
        "supportText": "[ˈʃʌtl]"
    },
    {
        "text": "large",
        "supportText": "[lɑːrdʒ]"
    },
    {
        "text": "clown",
        "supportText": "[klaʊn]"
    },
    {
        "text": "town",
        "supportText": "[taʊn]"
    },
    {
        "text": "brown",
        "supportText": "[braʊn]"
    },
    {
        "text": "sound",
        "supportText": "[saʊnd]"
    },
    {
        "text": "round",
        "supportText": "[raʊnd]"
    },
    {
        "text": "tasks",
        "supportText": "[ˈtæsks]"
    },
    {
        "text": "masks",
        "supportText": "[ˈmæsks]"
    },
    {
        "text": "risks",
        "supportText": "[ˈrɪsks]"
    },
    {
        "text": "costs",
        "supportText": "[ˈkɑːsts]"
    },
    {
        "text": "wrists",
        "supportText": "[ˈrɪsts]"
    },
    {
        "text": "compatible",
        "supportText": "[kəmˈpætəbl]"
    },
    {
        "text": "menu",
        "supportText": "[ˈmenjuː]"
    },
    {
        "text": "gourmet",
        "supportText": "[ˈɡʊrmeɪ]"
    },
    {
        "text": "horror",
        "supportText": "[ˈhɔːrər]"
    },
    {
        "text": "terror",
        "supportText": "[ˈterər]"
    },
    {
        "text": "tree",
        "supportText": "[triː]"
    },
    {
        "text": "truth",
        "supportText": "[truːθ]"
    },
    {
        "text": "true",
        "supportText": "[truː]"
    },
    {
        "text": "triangle",
        "supportText": "[ˈtraɪæŋɡl]"
    },
    {
        "text": "word",
        "supportText": "[wɜːrd]"
    },
    {
        "text": "world",
        "supportText": "[wɜːrld]"
    },
    {
        "text": "order",
        "supportText": "[ˈɔːrdər]"
    },
    {
        "text": "computer",
        "supportText": "[kəmˈpjuːtər]"
    },
    {
        "text": "progress",
        "supportText": "[ˈprɑːɡres]"
    },
    {
        "text": "automatically",
        "supportText": "[ˌɔːtəˈmætɪklɪ]"
    },
    {
        "text": "comedy",
        "supportText": "[ˈkɑːmədɪ]"
    },
    {
        "text": "sure",
        "supportText": "[ʃʊr]"
    },
    {
        "text": "parameters",
        "supportText": "[pəˈræmətərz]"
    },
    {
        "text": "performance",
        "supportText": "[pərˈfɔːrməns]"
    },
    {
        "text": "organization",
        "supportText": "[ˌɔːrɡənəˈzeɪʃn]"
    },
    {
        "text": "organized",
        "supportText": "[ˈɔːrɡənaɪzd]"
    },
    {
        "text": "interview",
        "supportText": "[ˈɪntɚˌvju]"
    },
    {
        "text": "hurt",
        "supportText": "[hɜːrt]"
    },
    {
        "text": "water",
        "supportText": "[ˈwɑtɚ]"
    },
    {
        "text": "availability",
        "supportText": "[əˌveɪləˈbɪlətɪ]"
    },
    {
        "text": "abstract",
        "supportText": "[ˈæbstrækt]"
    },
    {
        "text": "circles",
        "supportText": "[ˈsɜːkəlz]"
    },
    {
        "text": "hard",
        "supportText": "[hɑːrd]"
    },
    {
        "text": "available",
        "supportText": "[əˈveɪləbl]"
    },
    {
        "text": "defect",
        "supportText": "[ˈdiːfekt]"
    },
    {
        "text": "data",
        "supportText": "[ˈdætə]"
    },
    {
        "text": "start",
        "supportText": "[stɑːrt]"
    },
    {
        "text": "significant",
        "supportText": "[sɪɡˈnɪfɪkənt]"
    },
    {
        "text": "first",
        "supportText": "[fɜːrst]"
    },
    {
        "text": "learning",
        "supportText": "[ˈlɜːrnɪŋ]"
    },
    {
        "text": "picture",
        "supportText": "[ˈpɪktʃər]"
    },
    {
        "text": "application",
        "supportText": "[ˌæplɪˈkeɪʃn]"
    },
    {
        "text": "fantastic",
        "supportText": "[fænˈtæstɪk]"
    },
    {
        "text": "course",
        "supportText": "[kɔːrs]"
    },
    {
        "text": "solidify",
        "supportText": "[səˈlɪdɪfaɪ]"
    },
    {
        "text": "components",
        "supportText": "[kəmˈpəʊnənts]"
    },
    {
        "text": "purpose",
        "supportText": "[ˈpɜːrpəs]"
    },
    {
        "text": "button",
        "supportText": "[ˈbʌtn]"
    },
    {
        "text": "architecture",
        "supportText": "[ˈɑːrkɪtektʃər]"
    },
    {
        "text": "router",
        "supportText": "[ˈruːtər]"
    },
    {
        "text": "idiomatic",
        "supportText": "[ˌɪdɪəˈmætɪk]"
    },
    {
        "text": "items",
        "supportText": "[ˈaɪtəmz]"
    },
    {
        "text": "manipulate",
        "supportText": "[məˈnɪpjʊleɪt]"
    },
    {
        "text": "shadow",
        "supportText": "[ˈʃædəʊ]"
    },
    {
        "text": "break",
        "supportText": "[breɪk]"
    },
    {
        "text": "often",
        "supportText": "[ˈɔːfn]"
    },
    {
        "text": "careers",
        "supportText": "[kəˈrɪrz]"
    },
    {
        "text": "redundant",
        "supportText": "[rɪˈdʌndənt]"
    },
    {
        "text": "features",
        "supportText": "[ˈfiːtʃərz]"
    },
    {
        "text": "server",
        "supportText": "[ˈsɜːrvər]"
    },
    {
        "text": "root",
        "supportText": "[ruːt]"
    },
    {
        "text": "complicated",
        "supportText": "[ˈkɑːmplɪkeɪtɪd]"
    },
    {
        "text": "reserved",
        "supportText": "[rɪˈzəːvd]"
    },
    {
        "text": "correctly",
        "supportText": "[kəˈrektlɪ]"
    },
    {
        "text": "live",
        "supportText": "[lɪv]"
    },
    {
        "text": "lively",
        "supportText": "[ˈlaɪvlɪ]"
    },
    {
        "text": "advance",
        "supportText": "[ədˈvæns]"
    },
    {
        "text": "deliberate",
        "supportText": "[dɪˈlɪbərət]"
    },
    {
        "text": "quirk",
        "supportText": "[kwɜːrk]"
    },
    {
        "text": "determine",
        "supportText": "[dɪˈtɜːrmɪn]"
    },
    {
        "text": "priority",
        "supportText": "[praɪˈɔːrətɪ]"
    },
    {
        "text": "Very volatile villages vote vivaciously!",
        "supportText": "[ˈverɪ] [ˈvɑːlətl] [ˈvɪlɪdʒəz] [vəʊt] [vɪˈveɪʃəslɪ]"
    },
    {
        "text": "Try the Triple Chive Chinese cheese, Charles!",
        "supportText": "[traɪ] [ðiː] [ˈtrɪpl] [ˈtʃaɪv] [ˌtʃaɪˈniːz] [tʃiːz], []"
    },
    {
        "text": "This situation is related to politics.",
        "supportText": "[] [] [] [rɪˈleɪtɪd] [] [ˈpɑːlətɪks]"
    },
    {
        "text": "during",
        "supportText": "[ˈdʊrɪŋ]"
    },
    {
        "text": "temporary",
        "supportText": "[ˈtempərerɪ]"
    },
    {
        "text": "[ɛ]",
        "supportText": "any [ˈɛnɪ]"
    },
    {
        "text": "[æ]",
        "supportText": "ask [ˈæsk]"
    },
    {
        "text": "[u]",
        "supportText": "oozing [ˈuzɪŋ]"
    },
    {
        "text": "[ʊ]",
        "supportText": "good [ˈɡʊd]"
    },
    {
        "text": "[ɔ]",
        "supportText": "saw [ˈsɔ]"
    },
    {
        "text": "[ɑ]",
        "supportText": "not [ˈnɑt]"
    },
    {
        "text": "[ə]",
        "supportText": "about [əˈbaʊt]"
    },
    {
        "text": "[ʌ]",
        "supportText": "other [ˈʌðɚ]"
    },
    {
        "text": "[ɚ]",
        "supportText": "around [ɚˈɹaʊnd]"
    },
    {
        "text": "[ɝ]",
        "supportText": "early [ˈɝlɪ]"
    },
    {
        "text": "[ɪr]",
        "supportText": "ears [ˈɪrz]"
    },
    {
        "text": "[ɛr]",
        "supportText": "airport [ˈɛrˌpɔrt]"
    },
    {
        "text": "[ʊr]",
        "supportText": "insurance [ɪnˈʃʊrəns]"
    },
    {
        "text": "[ɔr]",
        "supportText": "morning [ˈmɔrnɪŋ]"
    },
    {
        "text": "[ɑr]",
        "supportText": "art [ˈɑrt]"
    },
    {
        "text": "struggled",
        "supportText": "[ˈstrʌɡəld]"
    },
    {
        "text": "because",
        "supportText": "[bɪˈkɔːz]"
    },
    {
        "text": "table",
        "supportText": "[ˈteɪbl]"
    },
    {
        "text": "special",
        "supportText": "[ˈspeʃl]"
    },
    {
        "text": "demand",
        "supportText": "[dɪˈmænd]"
    },
    {
        "text": "error",
        "supportText": "[ˈerər]"
    },
    {
        "text": "supersonic",
        "supportText": "[ˌsuːpərˈsɑːnɪk]"
    },
    {
        "text": "Atlantic",
        "supportText": "[ətˈlan(t)ɪk]"
    },
    {
        "text": "dedication",
        "supportText": "[ˌdedɪˈkeɪʃn]"
    },
    {
        "text": "attention",
        "supportText": "[əˈtenʃn]"
    },
    {
        "text": "transformation",
        "supportText": "[ˌtrænsfərˈmeɪʃn]"
    },
    {
        "text": "comprehension",
        "supportText": "[ˌkɑːmprɪˈhenʃn]"
    },
    {
        "text": "advantage",
        "supportText": "[ədˈvæntɪdʒ]"
    },
    {
        "text": "understand",
        "supportText": "[ˌʌndərˈstænd]"
    },
    {
        "text": "love",
        "supportText": "[lʌv]"
    },
    {
        "text": "metabolism",
        "supportText": "[məˈtæbəlɪzəm]"
    },
    {
        "text": "enthusiasm",
        "supportText": "[ɪnˈθuːzɪæzəm]"
    },
    {
        "text": "straightforward",
        "supportText": "[ˌstreɪtˈfɔːrwərd]"
    },
    {
        "text": "interested",
        "supportText": "[ˈɪntrəstɪd]"
    },
    {
        "text": "preserve",
        "supportText": "[prɪˈzɜːrv]"
    },
    {
        "text": "violin",
        "supportText": "[ˌvaɪəˈlɪn]"
    },
    {
        "text": "semiconscious",
        "supportText": "[ˌsemɪˈkɒnʃəs]"
    },
    {
        "text": "continue",
        "supportText": "[kənˈtɪnjuː]"
    },
    {
        "text": "presentation",
        "supportText": "[ˌpriːzenˈteɪʃn]"
    },
    {
        "text": "presented",
        "supportText": "prɪˈzentəd"
    },
    {
        "text": "rudimentary",
        "supportText": "[ˌruːdɪˈmentrɪ]"
    },
    {
        "text": "version",
        "supportText": "[ˈvɜːrʒn]"
    },
    {
        "text": "development",
        "supportText": "[dɪˈveləpmənt]"
    },
    {
        "text": "identified",
        "supportText": "[aɪˈdentəˌfaɪd]"
    },
    {
        "text": "instructor",
        "supportText": "[ɪnˈstrʌktər]"
    },
    {
        "text": "functional",
        "supportText": "[ˈfʌŋkʃənl]"
    },
    {
        "text": "something",
        "supportText": "[ˈsʌmθɪŋ]"
    },
    {
        "text": "built",
        "supportText": "[bɪlt]"
    },
    {
        "text": "pronunciation",
        "supportText": "[prəˌnʌnsɪˈeɪʃn]"
    },
    {
        "text": "helping",
        "supportText": "[ˈhelpɪŋ]"
    },
    {
        "text": "classroom",
        "supportText": "[ˈklæsruːm]"
    },
    {
        "text": "student",
        "supportText": "[ˈstuːdnt]"
    },
    {
        "text": "pronouncing",
        "supportText": "[prəˈnaʊnsɪŋ]"
    },
    {
        "text": "easier",
        "supportText": "[ˈiːzɪər]"
    },
    {
        "text": "recording",
        "supportText": "[rɪˈkɔːrdɪŋ]"
    },
    {
        "text": "romantic",
        "supportText": "[rəʊˈmæntɪk]"
    },
    {
        "text": "decide",
        "supportText": "[dɪˈsaɪd]"
    },
    {
        "text": "design",
        "supportText": "[dɪˈzaɪn]"
    },
    {
        "text": "whether",
        "supportText": "[ˈweðər]"
    },
    {
        "text": "established",
        "supportText": "[ɪˈstæblɪʃt]"
    },
    {
        "text": "convention",
        "supportText": "[kənˈvenʃn]"
    },
    {
        "text": "innovative",
        "supportText": "[ˈɪnəveɪtɪv]"
    },
    {
        "text": "innovate",
        "supportText": "[ˈɪnəveɪt]"
    },
    {
        "text": "recommendation",
        "supportText": "[ˌrekəmenˈdeɪʃn]"
    },
    {
        "text": "categories",
        "supportText": "[ˈkætəˌɡɔːrɪz]"
    },
    {
        "text": "explanatory",
        "supportText": "[ɪkˈsplænətɔːrɪ]"
    },
    {
        "text": "worth",
        "supportText": "[wɜːrθ]"
    },
    {
        "text": "either",
        "supportText": "[ˈiːðər]"
    },
    {
        "text": "success",
        "supportText": "[səkˈses]"
    },
    {
        "text": "solution",
        "supportText": "[səˈluːʃn]"
    },
    {
        "text": "complex",
        "supportText": "[kəmˈpleks]"
    },
    {
        "text": "ˈvɪdɪəʊ",
        "supportText": "[video]"
    },
    {
        "text": "volume",
        "supportText": "[ˈvɑːljuːm]"
    },
    {
        "text": "definitely",
        "supportText": "[ˈdefɪnətlɪ]"
    },
    {
        "text": "mobile",
        "supportText": "[ˈməʊbl]"
    },
    {
        "text": "extravaganza",
        "supportText": "[ɪkˌstrævəˈɡænzə]"
    },
    {
        "text": "video",
        "supportText": "[ˈvɪdɪəʊ]"
    },
    {
        "text": "expectations",
        "supportText": "[ˌekspekˈteɪʃənz]"
    },
    {
        "text": "meeting",
        "supportText": "[ˈmiːtɪŋ]"
    },
    {
        "text": "confidently",
        "supportText": "[ˈkɑːnfɪdəntlɪ]"
    },
    {
        "text": "concentration",
        "supportText": "[ˌkɑːnsnˈtreɪʃn]"
    },
    {
        "text": "concentrate",
        "supportText": "[ˈkɑːnsntreɪt]"
    },
    {
        "text": "adventures",
        "supportText": "[ædˈventʃərz]"
    },
    {
        "text": "destination",
        "supportText": "[ˌdestɪˈneɪʃn]"
    },
    {
        "text": "concluded",
        "supportText": "[kənˈkluːdəd]"
    },
    {
        "text": "commiserate",
        "supportText": "[kəˈmɪz əˌreɪt]"
    },
    {
        "text": "answered",
        "supportText": "[ˈænsərd]"
    },
    {
        "text": "comfortable",
        "supportText": "[ˈkʌmftəbl]"
    },
    {
        "text": "reasonable",
        "supportText": "[ˈriːznəbl]"
    },
    {
        "text": "companion",
        "supportText": "[kəmˈpænɪən]"
    },
    {
        "text": "very",
        "supportText": "[ˈverɪ]"
    },
    {
        "text": "series",
        "supportText": "[ˈsɪriːz]"
    },
    {
        "text": "talk",
        "supportText": "[tɔːk]"
    },
    {
        "text": "trying",
        "supportText": "[ˈtraɪɪŋ]"
    },
    {
        "text": "three",
        "supportText": "[θriː]"
    },
    {
        "text": "days",
        "supportText": "[ˈdeɪz]"
    },
    {
        "text": "topics",
        "supportText": "[ˈtɑːpɪks]"
    },
    {
        "text": "code",
        "supportText": "[kəʊd]"
    },
    {
        "text": "tracking",
        "supportText": "[ˈtrækɪŋ]"
    },
    {
        "text": "recommending",
        "supportText": "[ˌrekəˈmendɪŋ]"
    }
]

export default function getPracticeText(size) {
    return practiceText.slice(0, size);
}
function callPurge() {
    nl=$'\\n'

    if [ -z "$1" ]; then
        ACCESSKEY="DluNEs2MzwVcj2xH8HF1" # access key id (from portal or Sub Account)
    else
        ACCESSKEY="$1"
    fi

    echo "ACCESSKEY=$ACCESSKEY"

    if [ -z "$2" ]; then
        SECRETKEY="NfVcvPC65N0Vf7ETpcmouhHlFEsldxyrVP5yIIwe" # secret key (from portal or Sub Account)
    else
        SECRETKEY="$2"
    fi

    echo "SECRETKEY=$SECRETKEY"

    if [ -z "$3" ]; then
        echo "3rd param METHOD is not exists exit program.."
        return
    else
        METHOD=$3
    fi

    echo "METHOD=$METHOD"

    if [ -z "$4" ]; then
        echo "4th param URI is not exists exit program.."
        return
    else
        URI=$4
    fi

    echo "URI=$URI"

    TIMESTAMP=$(echo $(($(date +%s%N) / 1000000)))

    echo "TIMESTAMP=$TIMESTAMP"

    SIG="$METHOD"' '"$URI"${nl}
    SIG+="$TIMESTAMP"${nl}
    SIG+="$ACCESSKEY"

    SIGNATURE=$(echo -n -e "$SIG" | iconv -t utf8 | openssl dgst -sha256 -hmac $SECRETKEY -binary | openssl enc -base64)

    echo "SIGNATURE=$SIGNATURE"

    curl -X POST -H "Content-Type: application/json" -H "x-ncp-iam-access-key:$ACCESSKEY" -H "x-ncp-apigw-timestamp:$TIMESTAMP" -H "x-ncp-apigw-signature-v2:$SIGNATURE" -d '{"profileId":profileId, "edgeId":edgeId, "purgeType":"ALL"}' "https://edge.apigw.ntruss.com$URI"
}

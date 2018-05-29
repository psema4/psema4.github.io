#!/usr/bin/env bash

FILENAME=$1
CONTENT=""
STATUS=""
TYPE=""
STAGE=""
SOURCE_URL=""
IMAGE_URL=""

# replacement functions
quotemeta_cleanup() {
    perl -pi -e "s/\r//g" ${FILENAME}.html
}

applyContent() {
    if [ -f ${FILENAME}.content ]; then
        CONTENT=`cat ${FILENAME}.content`
    else
        CONTENT=`cat ../project-content-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${CONTENT}')"`
    perl -pi -e "s/CONTENT/\n${VALUE}/" ${FILENAME}.html
}

applySourceUrl() {
    if [ -f ${FILENAME}.source_url ]; then
        SOURCE_URL=`cat ${FILENAME}.source_url`
    else
        SOURCE_URL=`cat ../project-source_url-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${SOURCE_URL}')"`
    perl -pi -e "s/SOURCE_URL/${VALUE}/g" ${FILENAME}.html
}

applyStatus() {
    if [ -f ${FILENAME}.status ]; then
        STATUS=`cat ${FILENAME}.status`
    else
        STATUS=`cat ../project-status-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${STATUS}')"`
    perl -pi -e "s/STATUS/${VALUE}/g" ${FILENAME}.html
}

applyType() {
    if [ -f ${FILENAME}.type ]; then
        TYPE=`cat ${FILENAME}.type`
    else
        TYPE=`cat ../project-type-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${TYPE}')"`
    perl -pi -e "s/TYPE/${VALUE}/g" ${FILENAME}.html
}

applyStage() {
    if [ -f ${FILENAME}.stage ]; then
        STAGE=`cat ${FILENAME}.stage`
    else
        STAGE=`cat ../project-stage-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${STAGE}')"`
    perl -pi -e "s/STAGE/${VALUE}/g" ${FILENAME}.html
}

applyImageUrl() {
    if [ -f ${FILENAME}.image_url ]; then
        IMAGE_URL=`cat ${FILENAME}.image_url`
    else
        IMAGE_URL=`cat ../project-image_url-template.html`
    fi

    VALUE=`perl -le "print quotemeta('${IMAGE_URL}')"`
    perl -pi -e "s/IMAGE_URL/${VALUE}/g" ${FILENAME}.html
}

applyTitle() {
    perl -pi -e "s/TITLE/${FILENAME}/g" ${FILENAME}.html
}


# main
echo "creating project page '${FILENAME}'"
cp ../project-template.html ${FILENAME}.html
applyContent
applySourceUrl
applyStatus
applyType
applyStage
applyImageUrl
applyTitle
quotemeta_cleanup

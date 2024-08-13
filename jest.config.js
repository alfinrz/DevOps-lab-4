module.exports = {
    reporters: [
        'default',
        ['jest-junit', {outputdirectory: 'reports', outputName: 'report.xml'}],
        ],
};
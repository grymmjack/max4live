inlets  = 2;
outlets = 1;

function send_nrpn(n) {
    var a = arrayfromargs(messagename,arguments);
    msg = {
        msb:         a[1],
        lsb:         a[2],
        val:         a[3]
    };
    messnamed('nrpn_msb', msg.msb);
    messnamed('nrpn_lsb', msg.lsb);
    messnamed('nrpn_val', msg.val);
}

import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    rankContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rankIconContainer: {
        width: 64,
        height: 64,
    },
    rankIcon: {
        width: 64,
        height: 64,
        position: 'absolute',
    },
    leaderboardRankText: {
        color: 'white',
        marginTop: -8,
    },
});

var RankIcon = ({rankTier, leaderboardRank}) =>  {
    const rankIcons = {
        '0': require('../../assets/rank_icons/rank_icon_0.png'),
        '1': require('../../assets/rank_icons/rank_icon_1.png'),
        '2': require('../../assets/rank_icons/rank_icon_2.png'),
        '3': require('../../assets/rank_icons/rank_icon_3.png'),
        '4': require('../../assets/rank_icons/rank_icon_4.png'),
        '5': require('../../assets/rank_icons/rank_icon_5.png'),
        '6': require('../../assets/rank_icons/rank_icon_6.png'),
        '7': require('../../assets/rank_icons/rank_icon_7.png'),
        '7a': require('../../assets/rank_icons/rank_icon_7a.png'),
        '7b': require('../../assets/rank_icons/rank_icon_7b.png'),
        '7c': require('../../assets/rank_icons/rank_icon_7c.png'),
        '8': require('../../assets/rank_icons/rank_icon_8.png')
    };

    const starIcons = {
        '1': require('../../assets/rank_icons/rank_star_1.png'),
        '2': require('../../assets/rank_icons/rank_star_2.png'),
        '3': require('../../assets/rank_icons/rank_star_3.png'),
        '4': require('../../assets/rank_icons/rank_star_4.png'),
        '5': require('../../assets/rank_icons/rank_star_5.png'),
        '6': require('../../assets/rank_icons/rank_star_6.png'),
        '7': require('../../assets/rank_icons/rank_star_7.png')
    };

    if (!rankTier) return null;
    let rank, star;
    if (rankTier > 9) {
        if (leaderboardRank) {
            if (leaderboardRank <= 10) {
                rank = '8c'; // Divine Top 10
            } else if (leaderboardRank <= 100) {
                rank = '8b'; // Divine Top 100
            } else {
                rank = '8';
            }
        } else {
            const intRankTier = parseInt(rankTier, 10);
            const intStar = parseInt(intRankTier % 10, 10);
            if (!rank) {
                if (intStar <= 0) {
                    star = 0;
                } else if (intStar >= 7) {
                    star = 7;
                } else {
                    star = intStar;
                }
            }
            rank = rank || parseInt(intRankTier / 10, 10);
        }
    } else {
        rank = '0';
    }

    return (
        <View style = {styles.rankContainer}>
            <View style={styles.rankIconContainer}>
                {(star > 0) ? <Image style={styles.rankIcon} source={starIcons[star]}/> : null}
                <Image style={styles.rankIcon} source={rankIcons[rank]}/>
            </View>
            {leaderboardRank ? <Text style={styles.leaderboardRankText}>{leaderboardRank}</Text> : null}
        </View>
    );
}

export default RankIcon;

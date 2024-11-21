import React, { useState } from 'react';
import { Box, Card, Heading, Text, Button, Flex, Link } from 'rebass';
import { Input, Label } from '@rebass/forms';
import styles from './my-rebass-component.module.scss';

const MyRebassComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    return (
        <div className={styles.container}>
            <Box className={styles.dashboard}>
                {/* Navigation */}
                <Flex className={styles.dashboard__nav}>
                    <div>
                        <Heading fontSize={4}></Heading>
                    </div>
                    <Flex ml="auto">
                        <Link mr={4} color="text-secondary">
                            Home
                        </Link>
                        <Link mr={4} color="text-secondary">
                            Profile
                        </Link>
                        <Link color="text-secondary">Settings</Link>
                    </Flex>
                </Flex>

                {/* Stats Grid */}
                <Box className={styles.dashboard__grid}>
                    {/* Stat Card 1 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--stats']}`}
                        p={4}
                    >
                        <Text fontSize={1}>Total Users</Text>
                        <Text className={styles.stat_number}>1,234</Text>
                        <Text fontSize={1}>↑ 12% from last month</Text>
                    </Card>

                    {/* Stat Card 2 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--stats']}`}
                        p={4}
                    >
                        <Text fontSize={1}>Revenue</Text>
                        <Text className={styles.stat_number}>$45.2k</Text>
                        <Text fontSize={1}>↑ 8% from last month</Text>
                    </Card>

                    {/* Stat Card 3 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--stats']}`}
                        p={4}
                    >
                        <Text fontSize={1}>Active Projects</Text>
                        <Text className={styles.stat_number}>89</Text>
                        <Text fontSize={1}>↑ 24% from last month</Text>
                    </Card>
                </Box>

                {/* Action Cards */}
                <Box className={styles.dashboard__grid}>
                    {/* Action Card 1 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--action']}`}
                        p={4}
                    >
                        <Heading as="h3" mb={3}>
                            Quick Actions
                        </Heading>
                        <Flex flexDirection="column">
                            <Button className={styles['button--primary']} mb={2}>
                                Create New Project
                            </Button>
                            <Button className={styles['button--secondary']} mb={2}>
                                View Reports
                            </Button>
                            <Button variant="outline" mb={2}>
                                Invite Team Member
                            </Button>
                        </Flex>
                    </Card>

                    {/* Action Card 2 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--action']}`}
                        p={4}
                    >
                        <Heading as="h3" mb={3}>
                            Recent Activities
                        </Heading>
                        <Box>
                            {[
                                'Project Alpha updated',
                                'New team member added',
                                'Meeting scheduled',
                            ].map((activity, i) => (
                                <Text
                                    key={i}
                                    py={2}
                                    sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                >
                                    {activity}
                                </Text>
                            ))}
                        </Box>
                    </Card>

                    {/* Action Card 3 */}
                    <Card
                        className={`${styles.dashboard__card} ${styles['dashboard__card--action']}`}
                        p={4}
                    >
                        <Heading as="h3" mb={3}>
                            Tasks Overview
                        </Heading>
                        <Box>
                            {['Design Review', 'Backend Integration', 'User Testing'].map(
                                (task, i) => (
                                    <Flex
                                        key={i}
                                        py={2}
                                        sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                    >
                                        <Text>{task}</Text>
                                        <Text ml="auto" color="gray">
                                            In Progress
                                        </Text>
                                    </Flex>
                                )
                            )}
                        </Box>
                    </Card>
                </Box>

                {/* Contact Form */}
                <Card className={styles.dashboard__form}>
                    <Heading as="h3" mb={4}>
                        Contact Us
                    </Heading>
                    <Box as="form">
                        <Box className={styles.input_group}>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" value={formData.name} />
                        </Box>
                        <Box className={styles.input_group}>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" value={formData.email} />
                        </Box>
                        <Box className={styles.input_group}>
                            <Label htmlFor="message">Message</Label>
                            <Input
                                id="message"
                                name="message"
                                as="textarea"
                                rows={4}
                                value={formData.message}
                            />
                        </Box>
                        <Button className={styles['button--primary']} type="submit">
                            Send Message
                        </Button>
                    </Box>
                </Card>

                {/* Footer */}
                <Box className={styles.dashboard__footer}>
                    <Text color="text-secondary">© 2024 Your Company Name</Text>
                    <Flex justifyContent="center" mt={3}>
                        <Link mr={3} color="text-secondary">
                            Privacy Policy
                        </Link>
                        <Link mr={3} color="text-secondary">
                            Terms of Service
                        </Link>
                        <Link color="text-secondary">Contact</Link>
                    </Flex>
                </Box>
            </Box>
        </div>
    );
};

export default MyRebassComponent;
